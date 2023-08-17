import { UserButton } from "@clerk/nextjs/app-beta";

export default function Dashboard() {
  return <UserButton afterSignOutUrl="/" />;
}
