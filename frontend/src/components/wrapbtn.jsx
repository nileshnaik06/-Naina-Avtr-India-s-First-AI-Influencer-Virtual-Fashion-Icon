import WrapButton from "@/components/ui/wrap-button";
import { Globe } from "lucide-react";

const wrapbtn = (props) => {
  return (
    <div className="w-full flex ">
      <WrapButton className="mt-10" href="/docs/components/card-carousel">
        <Globe className="animate-spin " />
        {props.elemName}
      </WrapButton>
    </div>
  );
};

export default wrapbtn;
