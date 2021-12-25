import { useForm } from "react-hook-form";
import prisma from "../lib/prisma";
const Up = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = async (values) => {
    const tests = await prisma.testUp.create({
      data: { content: content },
    });
  };
  return (
    <div>
      <form className="px-5 py-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="content" className="sr-only">
            Informasi Iklan
          </label>
          <div className="relative">
            <textarea
              {...register("content", { required: true })}
              rows="4"
              className="w-full border"
              placeholder="Informasi Iklan"
            />
          </div>
        </div>
        <div className="w-full flex items-center py-8">
          <button
            className="w-full py-3 border bg-prime text-white border-prime"
            type="submit"
          >
            Unggah Iklan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Up;
