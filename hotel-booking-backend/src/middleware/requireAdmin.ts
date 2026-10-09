import { NextFunction, Request, Response } from "express";
import User from "../models/user";

/**
 * Requires verifyToken first. Loads User.role from DB (JWT has userId only).
 * Case-insensitive: "Admin", "admin", "ADMIN" etc. all work.
 * Also allows "hotel_owner" role for management endpoints.
 */
const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.userId).select("role");
    const normalizedRole = String(user?.role || "").toLowerCase().trim();
    const isAdmin = normalizedRole === "admin";
    const isHotelOwner = normalizedRole === "hotel_owner";
    if (!user || (!isAdmin && !isHotelOwner)) {
      return res.status(403).json({ message: "Access denied" });
    }
    // Attach normalized role for route-level checks
    req.userRole = isAdmin ? "admin" : "hotel_owner";
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to verify admin" });
  }
};

// Extend Request to include userRole
declare global {
  namespace Express {
    interface Request {
      userRole?: "admin" | "hotel_owner";
    }
  }
}

export default requireAdmin;
