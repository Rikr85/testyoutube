//npm init -y
//npm install @huggingface/inference
import { config } from  "dotenv";

import {HfInference} from "@huggingface/inference"

config()

/**Para poder instanciar la clase es necesario escribir un token*/
const hf = new HfInference(process.env.CLAVE);
//Debemos selecionar el modelo
const model = "Salesforce/blip-image-captioning-large";
//Link de la imagen ha analizar
const imageURL = "https://www.elespectador.com/resizer/ULuzalfasfasf";
//Descargar la imagen
const response = await fetch(imageURL);
const blob = await response.blob();

const resul = await hf.imageToText({
    data:blob,
    model,
})

console.log(resul);
