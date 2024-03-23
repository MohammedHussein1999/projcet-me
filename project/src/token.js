import axios from 'axios';




export default function token() {

 
    const token = 'your_access_token_here'; // استبدل بالـToken الفعلي

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // الآن يتم إرسال الـToken مع كل طلب
    
}

