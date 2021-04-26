import axios from 'axios';

const api = axios.create({
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'i47r11huc1dxwlf1sx2pfhimfo10ey',
    'Authorization': 'Bearer vgi1lycbxvwvrbrnizqsxkxdr737t2'
  },
});

/*

Token localhost : 8eax70tve6sd2v5r21tccgi8xn8hy1
Token theindependent : 81adc5w99e23eo5b6k9ldndu5ua0ii


CLIENT_ID = i47r11huc1dxwlf1sx2pfhimfo10ey
REDIRECT = 'http://localhost:8080/'

LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=i47r11huc1dxwlf1sx2pfhimfo10ey&redirect_uri=http://127.0.0.1/&response_type=token


    CLIENT_ID = 'VOTRE_CLIENT_ID';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=i47r11huc1dxwlf1sx2pfhimfo10ey&redirect_uri=https://theindependentgamers.fr/&response_type=token


TOKEN = bokzlhu8ay0sqne4u7z170e9l1yuli
*/

export default api;
