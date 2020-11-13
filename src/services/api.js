import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**

ios com emulador localhost
ios com dispositivo fisico ip da maquina no lugar do localhost
android com emulador: opções: - localhost (adb reverse)                              
                              - emulador android (- ip específico) android studio: 10.0.2.2
                              - genymotion 10.0.3.2
                              - android fisico: ip da máquina
 */