import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import confirmation from "@/assets/svgs/Confirmation.json";

interface ConfirmationProps {
  className?: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({ className }) => (
  <div
    
    className={className}
  >
    <Player
      autoplay
      loop={false} 
      src={confirmation}
      keepLastFrame={true}
      className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[88px] xl:h-[88px]"
    />
  </div>
);

export default Confirmation;
