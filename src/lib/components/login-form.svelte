<script>
  // @ts-nocheck

  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import {
    FieldGroup,
    Field,
    FieldLabel,
    FieldDescription,
  } from "$lib/components/ui/field/index.js";
  import { navigate } from "../../utils/router/helper";
  import { saveToken } from "../../storage/token";
  import Toast from "./toast.svelte";
  import { authService } from "../../services/login";

  const id = $props.id();

  let toastState = $state({
    title: "",
    type: "INFO",
    isOpen: false,
  });

  let username = $state("");
  let password = $state("");

  const _showToast = ({ title, type }) => {
    toastState = {
      title,
      type,
      isOpen: true,
    };

    setTimeout(() => {
      toastState = {
        title,
        type,
        isOpen: false,
      };
    }, 5000);
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      // show info to enter username
      _showToast({
        title: "Please enter Your email!",
        type: "ERROR",
      });
    }

    if (!password) {
      // show info to enter username
      _showToast({
        title: "Please enter Your password!",
        type: "ERROR",
      });
    }

    const response = await authService.login({ username, password });

    if (response.statusCode === 403) {
      return _showToast({
        title: response.message,
        type: "ERROR",
      });
    }

    _showToast({
      title: "تم تسجيل الدخول بنجاح",
      type: "SUCCESS",
    });

    navigate("/dashboard");
    saveToken(response.tokens.accessToken);
  };
</script>

<Card.Root class="mx-auto w-full max-w-sm">
  <Card.Header>
    <Card.Title class="text-2xl">Login</Card.Title>
    <Card.Description
      >Enter your email below to login to your account</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <form onsubmit={_handleSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel for="email-{id}">Email</FieldLabel>
          <Input
            bind:value={username}
            id="email-{id}"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <div class="flex items-center">
            <FieldLabel for="password-{id}">Password</FieldLabel>
            <a href="##" class="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input
            bind:value={password}
            id="password-{id}"
            type="password"
            required
          />
        </Field>
        <Field>
          <Button type="submit" class="w-full">Login</Button>
          <FieldDescription class="text-center">
            Don't have an account? <a href="##">Sign up</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  </Card.Content>
</Card.Root>
<!-- 
<div
  class="{toastState.isOpen
    ? 'bottom-5'
    : '-bottom-16'} transition-all ease-[cubic-bezier(.22,.6,.93,-0.66)] duration-1000 fixed right-5 border border-gray-300 p-5 py-3 bg-gray-200 rounded-lg"
>
  {toastState.title}
</div> -->

<Toast {toastState} />
