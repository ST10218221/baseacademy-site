import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // No API routes needed for now as we've removed the contact form persistence
  return httpServer;
}
