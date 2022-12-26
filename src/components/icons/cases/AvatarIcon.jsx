import { Icon } from "@chakra-ui/react";

const AvatarIcon = () => {
  return (
    <Icon
      enable-background="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      class="shopee-svg-icon icon-headshot"
      stroke="#c6c6c6"
    >
      <g>
        <circle
          cx="7.5"
          cy="4.5"
          fill="none"
          r="3.8"
          stroke-miterlimit="10"
        ></circle>
        <path
          d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
        ></path>
      </g>
    </Icon>
  );
};

export default AvatarIcon;
