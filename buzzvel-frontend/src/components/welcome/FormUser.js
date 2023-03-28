import axios from "axios";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

// Componente de formulário
export default function FormUser() {
    // Variaveis do form
    const [name, setName] = useState();
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();

    // Variáveis de retorno para o usuario
    const [error, setError] = useState("");
    const [sucess, setSucess] = useState("");

    // Variavel para o QR Code
    const [qrCodeImageSrc, setQrCodeImageSrc] = useState(null);

    // função de envio do formulário
    const submitForm = () => {
        axios
            .post(`http://localhost:8083/api/create/qr`, {
                name,
                linkedin,
                github,
            })
            .then((response) => {
                if (response.status == 200) {
                    // Informando mensagem de sucesso
                    setSucess(response.data);

                    // Download da imagem
                    const imageUrl = `data:image/png;base64,${response.data.image}`;

                    const link = document.createElement("a");
                    link.href = imageUrl;
                    link.download = "qr-code.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    setQrCodeImageSrc(imageUrl);

                    // Limpando mensagens de erro
                    setError("");
                }
            })
            .then((data) => {
                // Setando mensagens de erro
                if (data.error) {
                    console.log(data.error);
                    setError(data.error);
                    //  limpando mensagens de sucesso
                    setSucess("");
                } else {
                    console.log(data);
                }
            })
            .catch((error) => setError(error.response.data), setSucess(""));
    };

    // Renderização do componente
    return (
        <raiz>
            <h1 class="ml-16 mt-9 text-3xl">QR Code Image Generator</h1>
            <Form>
                {/* campo de nome */}
                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="px-14 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            Name
                        </label>
                        <input
                            class="py-3 pr-1 rounded-r-lg border-gray-500 border"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {error && (
                            <p class="ml-8 text-red-500 mt-2">
                                {error?.error?.name[0]}
                            </p>
                        )}
                    </div>
                </Form.Field>

                {/* Campo do linkedIn */}
                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="mt-8 px-8 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            LinkedIn URL
                        </label>
                        <input
                            class="py-3 rounded-r-lg border-gray-500 border"
                            onChange={(e) => setLinkedin(e.target.value)}
                        />
                        {error?.error?.linkedin && (
                            <p class="ml-8 text-red-500 mt-2">
                                {error?.error?.linkedin[0]}
                            </p>
                        )}
                    </div>
                </Form.Field>

                {/* Campo do Github */}
                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="px-9 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            Github URL
                        </label>
                        <input
                            class="py-3 pr-1 rounded-r-lg border-gray-500 border"
                            onChange={(e) => setGithub(e.target.value)}
                        />
                        {error?.error?.github && (
                            <p class="ml-8 text-red-500 mt-2">
                                {error?.error?.github[0]}
                            </p>
                        )}
                    </div>
                </Form.Field>
                {/* Retorno de mensagens */}
                {error && (
                    <p class="ml-8 text-red-500 mt-2">{error?.message}</p>
                )}
                {sucess && (
                    <p class="ml-8 text-green-500 mt-2">{sucess?.message}</p>
                )}
                {/* Botão de envio */}
                <Button onClick={submitForm} type="submit">
                    <p class="mt-7 border border-gray-500 px-16 py-4 ml-8 rounded-lg">
                        Generate Image
                    </p>
                </Button>
            </Form>
        </raiz>
    );
}
