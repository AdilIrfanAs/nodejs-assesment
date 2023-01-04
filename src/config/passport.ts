import passport from "passport";
import { User, UserDocument } from "./../api/models/users.model";
import { Request } from "express";
import { NativeError } from "mongoose";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;
passport.serializeUser<any, any>((req: Request, user, done) => {
    done(undefined, user);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err: NativeError, user: UserDocument) => done(err, user));
});


/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    try {
        console.log("Check 6")
        await User.findOne({ email: email.toLowerCase() }, (err: NativeError, user: UserDocument) => {
            console.log("Check 7")
            if (err) { return done(err); }
            if (!user) {
                return done(undefined, false, { message: `Email ${email} not found.` });
            }
            console.log("Check 8")
            user.comparePassword(password);
            console.log("Check 9")
        });
    }
    catch (error: any) {
        done(error)
    }
}));