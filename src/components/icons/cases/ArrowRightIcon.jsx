import { Icon } from "@chakra-ui/icons";

function ArrowRightIcon(props) {
  return (
    <Icon
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5 12H19"
        stroke="#8D28AD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="#8D28AD"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
}

export default ArrowRightIcon;
