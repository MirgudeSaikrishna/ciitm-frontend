import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';

const Google_Wrapper = ({ text }) => {
   const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

   if (!clientId) {
      alert('Google Client ID is not configured');
      return null;
   }

   return (
      <GoogleOAuthProvider clientId={clientId}>
         <Google text={text} />
      </GoogleOAuthProvider>
   );
};

export default Google_Wrapper;
