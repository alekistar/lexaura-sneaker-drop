
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Stealth Carbon Sole",
      tag: "Traction",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5Boqc3yXKEGI-kqQZXIrrZgYUt78cJEa5_vPIduR2Rtl-L_ha9rCRqDWeDbxyepG-1WC9QHwlSWWxE4SXsyGQELKTSQjenWA9WB19ESBz1w8f6ko5XuU-8ToodSAJwimX7mjY1Y7RpPNPXiHwtruDKooJ7jRBA6_Mxf3lrwxYC4EeTRrbd5L2US6yTVv7I48yKyya5fLjLOXGRJouA7RhAoWk-7CcXsAQzsc79vs8vsokmYMNnxIK3-bi63_w8QM0fbEQtuBBJlWo",
      size: "large",
      desc: "Aerospace-grade carbon fiber composite for ultimate traction."
    },
    {
      title: "Illuminated Stitching",
      tag: "Detail",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-2A0JjX6BZJO4jBEq0uqYKhkPeZ88QRwRIE7H3l-gWG2HgaF9XCE7GvKckDB35LbE0c2h5SOv_IkrvBkcLLz62aQ2jcyZiucprFSrt5HoM1XYZuyY-sDgC4dUlz1D54ud4KkAnDP0PiMpUqTjMFAVVi9AevKHYf5yz0cFy0lArduwEags_Emq62W3XAftkFSADijjCgs_xxVGTHe9qAG0z8rzige9pHRQRPt-_9BI9-n00rAvuzGUFPEMxz5fkQshDolbr7lN3hz8",
      size: "small",
      desc: "Reflective precision thread woven into every seam."
    },
    {
      title: "Etched Aglets",
      tag: "Finish",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJh4_vYOznAtOCWYThYoWPEwxFXjXttS3CwbnpL0TY3vEOgQesCcXtk1LfLftuSxVw016L5tu9AKgNZ8rhnIvy_bth9UJlzLr1gKGrYJmFuFnaoYH_i1LDBPjV9L4QArzhc1EbM0N3Vl5YuzuSJnf8pwRuMCKhaOb3tJelkvnpuLPLCzmSZY7QVWiF7u5EXqxV7jV8KETeM28HBod08-WqWag8mj09hEOzXS8_8_M_S6ZViumFMj7pBG-X8PvqTFiyxJTGNEi-PAYP",
      size: "small",
      desc: "Custom-engraved alloy aglets for a premium tactile feel."
    }
  ];

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto" aria-labelledby="specs-heading">
      <h4 id="specs-heading" className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-10 border-l-2 border-primary pl-4">Technical Specs</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Feature */}
        <div className="md:row-span-2 group relative aspect-square md:aspect-auto rounded-2xl overflow-hidden bg-neutral-dark border border-neutral-800 focus-within:ring-2 focus-within:ring-primary">
          <img 
            alt={`Detail of ${features[0].title}: ${features[0].desc}`} 
            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
            src={features[0].img} 
            loading="lazy"
            width="600"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{features[0].tag}</span>
            <h5 className="text-2xl font-bold">{features[0].title}</h5>
            <p className="text-neutral-400 text-sm mt-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
              {features[0].desc}
            </p>
          </div>
        </div>

        {/* Small Features */}
        <div className="grid grid-cols-1 gap-6">
          {features.slice(1).map((f, i) => (
            <div key={i} className="group relative aspect-video md:aspect-auto md:h-64 rounded-2xl overflow-hidden bg-neutral-dark border border-neutral-800 focus-within:ring-2 focus-within:ring-primary">
              <img 
                alt={`Detail of ${f.title}: ${f.desc}`} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
                src={f.img} 
                loading="lazy"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">{f.tag}</span>
                <h5 className="text-lg font-bold leading-tight">{f.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
