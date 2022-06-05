import { access, open, writeFile} from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from 'node:url';
const fileFullPath =  dirname(fileURLToPath(import.meta.url)) + "/files/fresh.txt";

export const create = async () => {
    try {
        //trying to open file, if we can - throwing exception that file existgit 
        await open(fileFullPath,"r");
        console.log("FS operation failed, file ", fileFullPath, " exists");
        throw new Error ("FS operation failed");
        
    } catch (err) {
        // catching that file doesn't exist and creting new file
        if (err.code === "ENOENT") {
            let newFile = await open(fileFullPath,'w');
            await newFile.write("I am fresh and young");
            newFile.close();
        }
    }
};
create();