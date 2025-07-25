import "./CSS/Preloader.css";
import SplitText from "../../components/SplitText/SplitText";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <SplitText
          text="naina"
          className="text-8xl font-extrabold text-center font-[LogoFont] tracking-wide"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </div>
  );
};

export default PreLoader;
