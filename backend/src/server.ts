import fastify from "fastify";
import cors from "@fastify/cors";
import { createTrip } from "./routes/create-trip.ts";
import {
  validatorCompiler,
  serializerCompiler,
} from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip.ts";
import { confirmParticipant } from "./routes/confirm-participant.ts";
import { createActivity } from "./routes/create-activity.ts";
import { getActivity } from "./routes/get-activities.ts";
import { createLink } from "./routes/create-link.ts";
import { getLinks } from "./routes/get-links.ts";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivity);
app.register(createLink);
app.register(getLinks);

app.listen({ port: 3333 }).then(() => {
  console.log("Server Running");
});
