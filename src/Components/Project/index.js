import img1 from "../../assets/Project/Project1.png"
import img3 from "../../assets/Project/Project3.png"
import img4 from "../../assets/Project/Project4.png"


const ProjectTech = [
    {
        title: "Student Management System",
        tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"],
        img: img1,
        description: `The Student Management System is a full-stack web app using Python/Django and MySQL. Users can manage student data through a form with full CRUD support. The interactive UI updates in real-time, demonstrating efficient data handling and responsive design for practical use in educational management.
        
        1. User Form for Student Records – Users can add new student details like name, email, phone, and marks via a clean and intuitive web form.
        2. Full CRUD Functionality – The system allows creating, reading, updating, and deleting student records seamlessly.
        3. Dynamic UI Display – All entered data is immediately reflected on the UI with a responsive and user-friendly design.
        4. Database Integration – Built with Python and Django, student data is stored in a MySQL database ensuring persistent storage and reliable data management.
        `,
    },
    {
        title: "E-commerce Website",
        tech: ["React", "GSAP", "Django", "MySQL", "Python"],
        img: img3,
        description: `
        The E-commerce Website is a full-stack web application built using React for the frontend and Django/Python for the backend, with MySQL for database management. It enables users to browse, search, and interact with a limited product catalog focused on electronics like TVs, headphones, and earbuds.

        1. User Authentication – Secure login and registration features allow users to create accounts and manage their profiles safely.
        2. Product Search & Filtering – Users can easily search for products and filter results to find specific items within the allowed catalog.
        3. Backend API Integration – The application uses RESTful APIs to fetch and manage product data, ensuring real-time updates and dynamic interaction between frontend and backend.
        4. Database Integration – All product and user data are stored in a MySQL database, enabling persistent storage, reliable data management, and seamless CRUD operations.
        5. Responsive UI & Smooth Animations – The frontend is designed with React and GSAP for animations, providing a dynamic and user-friendly interface for browsing and interacting with products.
        6. Product Restrictions – Only specific categories such as TVs, headphones, and earbuds are displayed; other products are not shown, purchased, or managed.
        `,
    },
    {
        title: "My Portfolio",
        tech: ["React", "GSAP", "Tailwind CSS"],
        img: img4,
        description: `
        The Portfolio Website is a dynamic, full-stack React application showcasing the developer’s skills, projects, about section, and contact form in a cohesive interface.

        1. Interactive Sections – The site includes About, Skills, Projects, and Contact sections, each designed with GSAP-powered animations for smooth transitions and engaging user experience.
        2. 3D Animations & Visual Effects – Using GSAP and Blender assets, the portfolio features interactive 3D elements that enhance visual appeal and demonstrate animation proficiency.
        3. Responsive & User-Friendly Design – Built with Tailwind CSS, the portfolio adapts to different screen sizes, ensuring consistent accessibility and professional presentation across devices.
        4. Real-Time Interaction – Users can explore projects, view skills, and send messages through the contact form, all integrated seamlessly within the frontend interface.
        `,
    },
];


export default ProjectTech;