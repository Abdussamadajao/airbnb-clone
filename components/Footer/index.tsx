import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investor</p>
        <p>Airbnb plus</p>
        <p>Airbnb luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It is a pretty</p>
        <p>Referral accepted</p>
        <p>hello</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Zazuu</p>
        <p>Bobola</p>
        <p>Atiku</p>
        <p>Obi</p>
        <p>Others</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help center</p>
        <p>Trust & Safety</p>
        <p>Say Hi Zazu</p>
        <p>SEN 211</p>
        <p>Others</p>
      </div>
    </footer>
  );
};

export default Footer;
