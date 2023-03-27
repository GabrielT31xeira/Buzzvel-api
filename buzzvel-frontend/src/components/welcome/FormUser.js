import axios from "axios";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

export default function FormUser() {
    const [name, setName] = useState();
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();

    const submitForm = () => {
        axios.post(`http://localhost:8083/api/create/qr`,{
            name,
            linkedin,
            github
        });
    }

    return (
        <raiz>
            <h1 class="ml-16 mt-9 text-3xl">QR Code Image Generator</h1>
            <Form>
                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="px-14 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            Name
                        </label>
                        <input class="py-3 pr-1 rounded-r-lg border-gray-500 border" onChange={(e) => setName(e.target.value)}/>
                    </div>
                </Form.Field>

                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="mt-8 px-8 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            LinkedIn URL
                        </label>
                        <input class="py-3 rounded-r-lg border-gray-500 border" onChange={(e) => setLinkedin(e.target.value)}/>
                    </div>
                </Form.Field>

                <Form.Field>
                    <div class="mt-8 ml-4">
                        <label class="px-9 py-4 bg-slate-400 text-slate-800 rounded-l-lg border-gray-500 border">
                            Github URL
                        </label>
                        <input class="py-3 pr-1 rounded-r-lg border-gray-500 border" onChange={(e) => setGithub(e.target.value)}/>
                    </div>
                </Form.Field>
                <Button
                    onClick={submitForm}
                    type="submit"
                >
                    <p class="mt-7 border border-gray-500 px-16 py-4 ml-8 rounded-lg">Generate Image</p>
                </Button>
            </Form>
        </raiz>
    );
}
