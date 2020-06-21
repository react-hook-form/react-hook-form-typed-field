<div align="center">
  <h2>👷🏻‍♂️ under construction</h2>
</div>

<div align="center">
    <p align="center">
        <a href="https://react-hook-form.com" title="React Hook Form - Simple React forms validation">
            <img src="https://raw.githubusercontent.com/bluebill1049/react-hook-form/master/website/logo.png" alt="React Hook Form Logo - React hook custom hook for form validation" width="300px" />
        </a>
    </p>
</div>

<p align="center">Performant, flexible and extensible forms with easy to use validation.</p>

## Goal

React Hook Form strictly typed Field component.

## Install

```
$ npm install @hookform/use-typed-controller
```

## Quickstart

```tsx
import { TextField, Checkbox } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTypedController } from "@hookform/use-typed-controller";

type FormValues = {
  uncontrolled: string;
  controlled: string;
  nested: {
    uncontrolled: { test: string };
    controlled: { test: boolean }[];
  };
};

export default function App() {
  const { control, handleSubmit } = useForm<FormValues>();
  const TypedController = useTypedController<FormValues>({ control });

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <form onSubmit={onSubmit}>
      {/* Uncontrolled Component */}
      <TypedController as="input" name="uncontrolled" defaultValue="" />
      <TypedController
        as="textarea"
        name={"nested.uncontrolled.test" as const}
        defaultValue=""
        rules={{ required: true }}
      />
      {/* Controlled Component */}
      <TypedController
        name="controlled"
        defaultValue=""
        render={(props) => <TextField {...props} />}
      />
      <TypedController
        name={"nested.controlled[0].test" as const}
        defaultValue={false}
        rules={{
          validate: (value) => value,
        }}
        render={(props) => <Checkbox {...props} />}
      />
      <input type="submit" />
    </form>
  );
}
```

## Backers

Thanks goes to all our backers! [[Become a backer](https://opencollective.com/react-hook-form#backer)].

<a href="https://opencollective.com/react-hook-form#backers">
    <img src="https://opencollective.com/react-hook-form/backers.svg?width=950" />
</a>

## Organizations

Thanks goes to these wonderful organizations! [[Contribute](https://opencollective.com/react-hook-form/contribute)].

<a href="https://github.com/react-hook-form/react-hook-form/graphs/contributors">
    <img src="https://opencollective.com/react-hook-form/organizations.svg?width=950" />
</a>

## Contributors

Thanks goes to these wonderful people! [[Become a contributor](CONTRIBUTING.md)].

<a href="https://github.com/react-hook-form/react-hook-form/graphs/contributors">
    <img src="https://opencollective.com/react-hook-form/contributors.svg?width=950" />
</a>
