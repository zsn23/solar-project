
const AnnouncementBar = () => {

  // Array of logo URLs (replace with your own logos)
  const logos = [
     "https://solartrade.pk/wp-content/uploads/2020/11/B_2.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_3.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_4.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_2.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_4.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/b11.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_4.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_3.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_24.png",
     "https://solartrade.pk/wp-content/uploads/2020/11/B_24.png",

    ];

  return (
    <div
      className="announcement-bar"
    >
      <div className="logo-container">
        {logos.concat(logos).map((logo,index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
