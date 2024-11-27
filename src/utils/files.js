import fs from "fs/promises";

export async function getFile(filePath, encoding = "utf8") {
  try {
    const data = await fs.readFile(filePath, encoding);
    return data;
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${filePath}:`, error.message);
    throw new Error(`Erro ao acessar o arquivo ${filePath}`);
  }
}
