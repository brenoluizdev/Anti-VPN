import axios from 'axios';

let proxyCheckKey: string = process.env.proxyCheckKey;

export async function checkVpn(ip: string) {
    const url = `https://proxycheck.io/v2/${ip}?key=${proxyCheckKey}&vpn=1`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data[ip] && data[ip].proxy === 'yes') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro ao verificar o IP:', error);
        return false;
    }
}