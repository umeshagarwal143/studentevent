const eventDetails = [
  {
    title: "HTML WorkShop",
    location: "Jaipur",
    date: "Januray 15, 2024",
    description:
      "A full blown workshop on HTML.Ignite your HTML spirit at the Workshop.Register to learn from industry experts, participate in startup simulations, and turn your business ideas into web-reality.",
    fulldescription: "same as above",
  },
  {
    title: "Sports Event",
    location: "Jaipur",
    date: "Januray 15, 2024",
    description:
      "Introducing Various sports.Unleash your competitive spirit at the Sports Event. Register to participate in a variety of sports tournaments, enjoy friendly competition, and celebrate the thrill of athleticism on campus.",
    fulldescription: "same as above",
  },
  {
    id: "1",
    title: "InnovateU Conference",
    date: "February 15, 2024",
    location: "University Center Auditorium",
    description:
      "Explore the latest trends in innovation and technology. Join us for a day of inspiring keynotes, interactive workshops, and networking opportunities. Register now to be part of the innovation revolution!",
    fulldescription: `Dive into the future of technology and creativity at the InnovateU Conference on February 15, 2024, at the University Center Auditorium. This event brings together students, professionals, and industry leaders to explore cutting-edge innovations, discuss emerging trends, and participate in hands-on workshops.

        Engage with thought-provoking keynotes from renowned experts, connect with like-minded peers during interactive sessions, and seize the chance to network with industry professionals. Whether you're a tech enthusiast or just curious about the future, InnovateU is your gateway to a world of possibilities.

        Don't miss this opportunity to be at the forefront of innovation. Register now to secure your spot and join us in shaping the future!`,
  },
  {
    id: "2",
    title: "Artistry Unleashed Exhibition",
    date: "March 10, 2024",
    location: "Student Art Gallery",
    description:
      "Unleash your creativity at our annual Artistry Unleashed Exhibition. Register to showcase your artistic talents, connect with fellow artists, and celebrate the diverse expressions of creativity on campus.",
    fulldescription: `Calling all artists! The Artistry Unleashed Exhibition on March 10, 2024, at the Student Art Gallery is your opportunity to showcase your creative prowess. Whether you're a painter, sculptor, photographer, or any form of artist, this event is your canvas.

        Register now to display your work, connect with other talented individuals, and immerse yourself in a celebration of artistic expression. This exhibition is not just about art; it's about the stories, emotions, and inspirations behind each piece.

        Join us in fostering a vibrant artistic community on campus. Register today and let your artistry shine at this unique and memorable event!`,
  },
  {
    id: "3",
    title: "Leadership Summit 2024",
    date: "April 5-6, 2024",
    location: "Student Union Ballroom",
    description:
      "Elevate your leadership skills at the Leadership Summit 2024. Two days of dynamic workshops, inspiring speakers, and collaborative activities. Register now to become the leader you aspire to be!",
    fulldescription: `Ready to take your leadership skills to the next level? Join us for the Leadership Summit 2024 on April 5-6, 2024, at the Student Union Ballroom. This immersive two-day event is designed to empower students with the knowledge and skills needed to excel in leadership roles.

        Engage in interactive workshops, gain insights from accomplished speakers, and participate in collaborative activities that will enhance your leadership capabilities. Whether you're a seasoned leader or just starting your journey, this summit is your gateway to leadership excellence.

        Don't miss this chance to network with professionals, connect with like-minded peers, and embark on a transformative leadership experience. Register now to secure your spot at the Leadership Summit 2024!`,
  },
  {
    id: "4",
    title: "Global Impact Hackathon",
    date: "May 20-22, 2024",
    location: "Engineering Building",
    description:
      "Tackle global challenges through innovation at the Global Impact Hackathon. Register now to join a diverse team of problem solvers, developers, and designers in creating solutions that make a difference.",
    fulldescription: `Ready to make a global impact? The Global Impact Hackathon on May 20-22, 2024, at the Engineering Building is your opportunity to join forces with like-minded individuals and create innovative solutions to pressing global challenges.

        Form a diverse team of problem solvers, developers, and designers as you embark on a 48-hour journey to tackle real-world problems. From climate change to healthcare, your ideas can make a difference.

        Register now to be part of this transformative experience. Together, let's turn ideas into action and make a positive impact on the world!`,
  },
  {
    id: "5",
    title: "Cultural Fusion Festival",
    date: "June 8, 2024",
    location: "Outdoor Amphitheater",
    description:
      "Celebrate diversity at the Cultural Fusion Festival. Register to experience a day of cultural performances, international cuisine, and interactive exhibits that showcase the rich tapestry of our student community.",
    fulldescription: `Immerse yourself in a celebration of cultures at the Cultural Fusion Festival on June 8, 2024, at the Outdoor Amphitheater. This vibrant event brings together students from diverse backgrounds to share their traditions, customs, and cuisines.

        Register now to enjoy a day filled with cultural performances, international cuisine, and interactive exhibits. From dance performances to art displays, the Cultural Fusion Festival is a journey around the world without leaving campus.

        Join us in embracing the richness of diversity. Register today to secure your spot at this unforgettable cultural experience!`,
  },
  {
    id: "6",
    title: "Sports Extravaganza 2024",
    date: "July 15-17, 2024",
    location: "Athletic Complex",
    description:
      "Unleash your competitive spirit at the Sports Extravaganza 2024. Register to participate in a variety of sports tournaments, enjoy friendly competition, and celebrate the thrill of athleticism on campus.",
    fulldescription: `Calling all sports enthusiasts! The Sports Extravaganza 2024, happening on July 15-17, 2024, at the Athletic Complex, is your chance to showcase your athletic prowess and immerse yourself in a weekend of friendly competition.

        Register now to participate in a variety of sports tournaments, including soccer, basketball, and more. Whether you're a seasoned athlete or just looking for some fun, the Sports Extravaganza has something for everyone.

        Join us for a weekend of sportsmanship, camaraderie, and the thrill of competition. Register today and be part of the Sports Extravaganza 2024!`,
  },
  {
    id: "7",
    title: "Entrepreneurship Bootcamp",
    date: "August 12-14, 2024",
    location: "Business School Auditorium",
    description:
      "Ignite your entrepreneurial spirit at the Entrepreneurship Bootcamp. Register to learn from industry experts, participate in startup simulations, and turn your business ideas into reality.",
    fulldescription: `Ready to kickstart your entrepreneurial journey? Join us at the Entrepreneurship Bootcamp on August 12-14, 2024, at the Business School Auditorium. This intensive program is designed to equip students with the skills and knowledge needed to thrive in the world of startups.

        Register now to learn from industry experts, engage in hands-on startup simulations, and connect with fellow aspiring entrepreneurs. Whether you have a business idea or simply want to explore the entrepreneurial landscape, this bootcamp is your gateway to innovation and success.
        Don't miss this opportunity to turn your passion into a business. Register today and embark on a transformative entrepreneurial adventure!`,
  },
  {
    id: "8",
    title: "Health and Wellness Expo",
    date: "September 5, 2024",
    location: "Student Health Center",
    description:
      "Prioritize your well-being at the Health and Wellness Expo. Register to explore fitness demos, mental health workshops, and discover resources for a healthier lifestyle.",
    fulldescription: `Take a proactive approach to your well-being at the Health and Wellness Expo on September 5, 2024, at the Student Health Center. This expo offers a holistic experience, featuring fitness demonstrations, mental health workshops, and a showcase of resources to support a healthier lifestyle.

        Register now to immerse yourself in a day dedicated to your physical and mental well-being. Engage with experts, participate in interactive sessions, and gain insights to lead a healthier and happier life.

        Join us in fostering a campus culture focused on well-being. Register today and prioritize your health at the Health and Wellness Expo!`,
  },
];

export default eventDetails;
