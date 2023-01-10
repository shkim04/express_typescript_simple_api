import express, { Request, Response, NextFunction } from "express";
import config from "./config";
// import connectMongoDB from "./db";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
	res.send("Here is the response");
});

app.post("/", async (req: Request, res: Response): Promise<void> => {
	try {
		const firstName = req.body.firstName;
		const lastName = req.body.lastName;

		// const client = await connectMongoDB();
		// const db = await client.db(config.mongodb.db);
		// const collection = await db.collection(config.mongodb.collection);

		// await collection.insertOne(
		// 	{
		// 		firstName: firstName,
		// 		lastName: lastName
		// 	}
		// );
		
		res.status(200).send("Successfully Created in DB");
	}
	catch(err) {
		res.status(500).send("Error Occured in Server");
		console.log(`<POST> '/' error occured: ${err}`);
	}
});

app.listen(config.port, () => {
	console.log(`Server is running on ${config.port}`);
});