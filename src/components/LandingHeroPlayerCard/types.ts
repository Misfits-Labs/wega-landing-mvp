import tw, { styled } from 'twin.macro'; 

export const PlayerCardContainer = styled.div`
 display: flex;
 width: 320px;
 height: 240px;
 max-width: 320px;
 padding: 20px 40px;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 position: relative;
 border-radius: 10px;
 ${tw`border border-[2px] dark:border-shinishi`}
 background: rgba(52, 52, 52, 0.40);
 backdrop-filter: blur(15px); 
`

export const PlayerAvatarWrapper = styled.div`
 & > img, canvas { 
  border-radius: 100%;
 } 
` 

export const CreateGameCardContainer = styled.div`
 display: flex;
 max-width: 559px;
 padding: 30px;
 flex-direction: column;
 align-items: center;
 gap: 32px;
` 

export const InputBox = styled.input`
 font-size: 67px;
 font-style: normal;
 font-weight: 600;
 line-height: 68px;
 ${tw`bg-inherit focus:outline-none`}
 text-align: center;
 
 -moz-appearance: textfield;

 &::-webkit-outer-spin-button, 
 &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
 }
`

