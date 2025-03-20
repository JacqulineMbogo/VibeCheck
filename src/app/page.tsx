import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from "next/image";

export default function Home() {
  return (
    <ClerkProvider>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold mb-4">Welcome to VibeCheck</h1>
      <p className="text-lg text-gray-400 mb-6">Track your moods, journal your thoughts, and reflect daily.</p>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
        </div>
      </main>
    </div>
  </ClerkProvider>
  );
}
