import React, { useState, useEffect } from 'react';
import { getProjects, getExperiences, getSkills, getPublications,getProfiles } from '../api';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import Contact from '../components/Contact'; 
 


const Home = () => {
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [publications, setPublications] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    Promise.all([
      getProjects(),
      getExperiences(),
      getSkills(),
      getPublications(),
      getProfiles()
    ]).then(([projectsRes, experiencesRes, skillsRes, publicationsRes, profilesRes]) => {
      setProjects(projectsRes.data);
      setExperiences(experiencesRes.data);
      setSkills(skillsRes.data);
      setPublications(publicationsRes.data);
      
      if (profilesRes.data?.length > 0) {
        setProfile(profilesRes.data[0]);
      }
      setLoading(false);
    }).catch(error => {
      console.error('Error:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loading">Loading Portfolio...</div>;
  }

  return (
    <div className="home-container">
      <Hero 
        title="Navid A Mulla"
        subtitle="Senior Robotics Engineer | ROS/ROS2 Expert"
        description="Autonomous Navigation & Motion Planning Specialist"
        resumeUrl={profile.resume_url}
      />
      
      <About 
        summary="4+ years experience in robotics with expertise in ROS, computer vision, and autonomous systems."
        education="M.Tech in Robotic Engineering - Ramaiah University (2018-2020)"
      />
      
      <Skills skills={skills} />

      <Experience experiences={experiences} />
      
      <Projects projects={projects} title="Featured Robotics Projects" />
      
      <Publications publications={publications} />
      <Contact/>

    </div>
  );
};

export default Home;