import { NextFunction, Request, Response } from "express";
import User from "../models/user";

/**
 * Requires verifyToken first and allows only the hotel_owner role.
 * This protects platform-wide user and role management from regular admins.
 */
const requireHotelOwner = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await User.findById(req.userId).select("role");
    const normalizedRole = String(user?.role || "").toLowerCase().trim();

    if (!user || normalizedRole !== "hotel_owner") {
      return res.status(403).json({ message: "Owner access required" });
    }

    req.userRole = "hotel_owner";
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to verify owner access" });
  }
};

export default requireHotelOwner;
