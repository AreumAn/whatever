import type { Route } from "./+types/home";
import { Button } from '~/common/components/ui/button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <h1>
      Hello World <Button>Click me</Button>
    </h1>
  );
}
