import "../styles/PropertyManagement.css";

function PropertyManagement() {

  const features = [
    {
      title: "Property Tracking",
      text: "Monitor all your properties, units, and important information from one dashboard."
    },
    {
      title: "Tenant Management",
      text: "Manage tenants, contracts, payments, and communication easily."
    },
    {
      title: "Maintenance Control",
      text: "Track maintenance requests and keep your properties running smoothly."
    },
    {
      title: "Financial Management",
      text: "Manage rent collection, expenses, and financial reports."
    }
  ];


  return (

    <div className="property-page">


      <section className="property-hero">

        <h1>
          Property Management
        </h1>

        <p>
          A complete solution to manage properties,
          tenants, and daily operations efficiently.
        </p>

      </section>



      <section className="property-section">


        <h2>
          Everything You Need To Manage Properties
        </h2>


        <div className="property-grid">


          {features.map((item,index)=>(

            <div 
              className="property-card"
              key={index}
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}


        </div>


      </section>



      <section className="property-bottom">

        <h2>
          Simplify Your Property Operations
        </h2>

        <p>
          PropertyPro helps real estate teams save time,
          improve efficiency, and deliver better experiences.
        </p>

      </section>



    </div>

  );

}


export default PropertyManagement;