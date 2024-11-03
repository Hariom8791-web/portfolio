import styles from './ProjectsStyles.module.css';
import email from '../../assets/email.png';
import emailvalidator from '../../assets/emailvalidator.png';
import auth from '../../assets/auth.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={auth}
          link="https://front-auth-mu.vercel.app/Login"
          h3="Authentication and Authorization from scratch "
          p="authentication and authorization from scratch, using libraries like bcrypt for password hashing and JWT for secure token management. It supports user sessions and includes role-based access controls. This setup ensures secure, scalable, and efficient user management."
        />
        <ProjectCard
          src={email}
          link="https://front-auth-mu.vercel.app/Login"
          h3="Email SMTP Server"
          p="The SMTP server project is built from scratch, featuring email 
          verification and customizable HTML templates for effective user communication. 
          It handles secure email delivery and validation, ensuring reliable messaging services. 
          This setup provides robust support for email-based workflows and user notifications"
        />
        <ProjectCard
          src={emailvalidator}
          link="https://front-auth-mu.vercel.app/Login"
          h3="Email validator Through PING  "
          p="Email Valdator using PING with 90% Accuracy.The email validator project utilizes the ping-email library to verify email addresses. It processes a CSV file of emails, checks each for validity, and returns a new CSV file indicating which emails are valid or invalid. This tool streamlines bulk email verification for improved data accuracy in communications."
        />

        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
