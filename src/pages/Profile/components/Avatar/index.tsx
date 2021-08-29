import { FiCamera } from "react-icons/fi";

import * as S from "./styles";

export const AvatarInput = () => {
  return (
    <S.Avatar>
      <img
        src="https://avatars.githubusercontent.com/u/56128203?v=4"
        alt="Profile"
      />
      <button>
        <FiCamera size="24px" color="#FFFFFF" />
      </button>
    </S.Avatar>
  );
};
