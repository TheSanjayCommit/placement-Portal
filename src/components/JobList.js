// // import React, { useEffect, useState } from "react";
// // import { getFirestore, collection, getDocs } from "firebase/firestore";
// // import { app } from "../firebase"; // Make sure this is your Firebase app

// // const JobList = () => {
// //   const [jobs, setJobs] = useState([]);
// //   const db = getFirestore(app);

// //   useEffect(() => {
// //     const fetchJobs = async () => {
// //       const jobCol = collection(db, "jobs");
// //       const snapshot = await getDocs(jobCol);
// //       const jobData = snapshot.docs.map(doc => ({
// //         id: doc.id,
// //         ...doc.data()
// //       }));
// //       setJobs(jobData);
// //     };

// //     fetchJobs();
// //   }, []);

// //   return (
// //     <div style={{ padding: "1rem" }}>
// //       <h2>🚀 Available Internships & Jobs</h2>
// //       {jobs.map((job, idx) => (
// //         <div key={job.id} style={{ border: "1px solid #ccc", borderRadius: "8px", marginBottom: "1rem", padding: "1rem" }}>
// //           <h3>{job.company} — <small>{job.role}</small></h3>
// //           <p><strong>Deadline:</strong> {job.deadline}</p>
// //           <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
// //             <button>Apply Now</button>
// //           </a>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default JobList;




















// import React, { useEffect, useState } from "react";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import { app } from "../firebase";

// const JobList = () => {
//   const [jobs, setJobs] = useState([]);
//   const db = getFirestore(app);
//   const auth = getAuth(app);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       const jobCol = collection(db, "jobs");
//       const snapshot = await getDocs(jobCol);
//       const jobData = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setJobs(jobData);
//     };

//     fetchJobs();
//   }, []);

//   const handleApply = async (job) => {
//     const user = auth.currentUser;

//     if (!user) {
//       alert("Please sign in to apply.");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "applications"), {
//         userId: user.uid,
//         email: user.email,
//         jobId: job.id,
//         company: job.company,
//         role: job.role,
//         appliedAt: new Date().toISOString(),
//       });

//       // Open apply link
//       window.open(job.applyLink, "_blank");
//     } catch (error) {
//       console.error("Error logging application:", error);
//       alert("Failed to apply. Please try again.");
//     }
//   };

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>🚀 Available Internships & Jobs</h2>
//       {jobs.map((job) => (
//         <div
//           key={job.id}
//           style={{
//             border: "1px solid #ccc",
//             borderRadius: "8px",
//             marginBottom: "1rem",
//             padding: "1rem",
//           }}
//         >
//           <h3>
//             {job.company} — <small>{job.role}</small>
//           </h3>
//           <p>
//             <strong>Deadline:</strong> {job.deadline}
//           </p>
//           <button onClick={() => handleApply(job)}>Apply Now</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobList;


























import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobCol = collection(db, "jobs");
      const snapshot = await getDocs(jobCol);
      const jobData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobData);
    };

    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🚀 Available Internships & Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} style={{ border: "1px solid #ccc", borderRadius: "8px", marginBottom: "1rem", padding: "1rem" }}>
          <h3>{job.company} — <small>{job.role}</small></h3>
          <p><strong>Deadline:</strong> {job.deadline}</p>
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            <button>Apply Now</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default JobList;
