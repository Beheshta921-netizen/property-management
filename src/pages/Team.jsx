import "../styles/Team.css";

function Team() {

  const members = [
    {
      name: "Ahmed Khan",
      role: "CEO & Founder",
      icon: "👨‍💼"
    },
    {
      name: "Sarah Ali",
      role: "Product Manager",
      icon: "👩‍💻"
    },
    {
      name: "John Smith",
      role: "Technology Lead",
      icon: "👨‍💻"
    },
    {
      name: "Emily Brown",
      role: "Marketing Director",
      icon: "👩‍💼"
    }
  ];


  return (

    <div className="team-page">


      {/* Hero */}

      <section className="team-hero">

        <h1>
          Meet Our Team
        </h1>

        <p>
          The people behind PropertyPro's mission
          to transform property management.
        </p>

      </section>



      {/* Team Cards */}

      <section className="team-section">


        <h2>
          Our Leadership Team
        </h2>


        <div className="team-grid">


          {members.map((member,index)=>(

            <div 
              className="team-card"
              key={index}
            >

              <div className="team-avatar">
                {member.icon}
              </div>


              <h3>
                {member.name}
              </h3>


              <p>
                {member.role}
              </p>


            </div>

          ))}


        </div>


      </section>



    </div>

  );

}


export default Team;