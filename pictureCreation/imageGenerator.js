export async function createImageFromPrompt(prompt) {
    const image = await query({"inputs": prompt});
    return image;
}

async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}