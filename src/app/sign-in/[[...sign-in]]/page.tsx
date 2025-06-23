import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              formButtonPrimary: "bg-primary hover:bg-primary/90",
              card: "shadow-lg",
            },
          }}
          redirectUrl="/construction/home"
        />
      </div>
    </div>
  );
} 