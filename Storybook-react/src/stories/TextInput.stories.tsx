import type { Meta, StoryObj } from '@storybook/react-vite';
import TextInput from '../TextInput/TextInput';

const meta : Meta<typeof TextInput> = {
    component: TextInput,
    title: 'UI/TextInput'
}

export default meta;

export const FirstComponent : StoryObj<typeof TextInput> ={
    args:{
        label:'Name'
    }
}

export const SecondComponent : StoryObj<typeof TextInput> ={
    args:{
        label:'Last Name',
        placeholder:'Enter your lastname'
    }
}