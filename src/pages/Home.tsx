import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { ButtonGroup, Main } from "../styles/styled";
import { FlexBox } from "../styles/FlexBox";
import { Text } from "../styles/Text";
import { FirebaseError } from "firebase/app";
import NavigateToSurvey from "../components/NavigateToSurvey";
import {
  loginWithGoogle,
  handleRedirectResult,
} from "../services/auth/loginWithGoogle";
import { loginWithEmail } from "../services/auth/loginWithEmail";
import { logout } from "../services/auth/logoutService";
import { doc, setDoc, getDocs, where, query } from "firebase/firestore";
import { User } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");


  const { setCurrentUser } = useAuth();

  const handleLogin = async () => {
    try {
      await loginWithEmail(email, password);
      alert("로그인에 성공했습니다.");
      navigate("/mypage");
    } catch (error) {
      const firebaseError = error as FirebaseError;
      switch (firebaseError.code) {
        case "auth/invalid-credential":
          return setError("이메일 또는 비밀번호를 확인해주세요");
        default:
          return setError("입력 정보를 확인해주세요");
      }
    }
  };

  return (
    <Main gap="8rem">
      <FlexBox direction="column" gap="2rem">
        <FlexBox direction="column" gap="1rem" style={{alignItems: "flex-start", width: "100%"}}>
          <Text fontSize="lg" fontWeight="bold">안녕하세요!</Text>
          <Text fontSize="md" fontWeight="bold">나만의 이상형을 찾아 볼까요?</Text>
        </FlexBox>  
        <FlexBox direction="column" gap="1rem">
          <Input
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </FlexBox>
          {error ? <Text fontSize="md" color="red">{error}</Text> : null}
        <Button bgColor="main" label="로그인하기" onClick={handleLogin} width="100%">로그인하기</Button>
      </FlexBox>
      <FlexBox direction="column" gap="8rem">
        <div>
          <Text fontSize="md">SNS 계정으로 간편하게 시작하기</Text>
          <ButtonGroup>
            <img src="/images/google.png" alt="구글 로그인" />
            <img src="/images/kakao.png" alt="카카오 로그인" />
            <img src="/images/naver.png" alt="네이버 로그인" />
          </ButtonGroup>
        </div>
        <FlexBox gap="1rem">
          <Text fontSize="md">이상형 찾기가 처음이라면?</Text>
          <Button label="회원가입" bgColor="sub" width="auto" height="auto" onClick={() => navigate('signup')}>가입하기</Button>
        </FlexBox>
      </FlexBox>
    </Main>

  );
};

export default Home;