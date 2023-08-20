import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const PreviewCardContainer = styled(motion.div)`
  ${tw`
    h-[125px]
    w-[100px]
    bg-[tan]
    flex flex-col items-center
    shadow-lg shadow-gray-700
    cursor-pointer
  `}/* transition: opacity 1.3s ease-in-out 1.5s;
opacity: ${(props) => (props.show === 'true' ? 1 : 0)}; */

	/* transition: opacity 0.3s ease-in-out; */
`;
