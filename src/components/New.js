import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

export default function New() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <>
            <Helmet>
                <title>Character Creation</title>
            </Helmet>
            <h2 className="heading">Let's create a character...</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-1" noValidate>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        className="field br-1"
                        {...register("name", { required: true, minLength: 2 })}
                    />
                    {errors.name && <span className="error">
                        {errors.name.type === "required" ? "Name is required" : "Name must be at least 2 characters"}
                    </span>}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Type (Ex. Genetic experiment [or leave empty])"
                        className="field br-1"
                        {...register("type", { minLength: 2 })}
                    />
                    {errors.type && <span className="error">Type must be at least 2 characters</span>}
                </div>
                <div className="form-group">
                    <input
                        type="url"
                        placeholder="Image URL (Ex. https://example.com/image.jpg)"
                        className="field br-1"
                        {...register("imageUrl", { required: true, pattern: /\.(jpeg|jpg|gif|png)$/ })}
                    />
                    {errors.imageUrl && <span className="error">
                        {errors.imageUrl.type === "required" ? "Image URL is required" : "Image URL must end with .jpeg, .jpg, or .png"}
                    </span>}
                </div>
                <div className="form-group">
                    <select className="field br-1" {...register("status", { required: true })} defaultValue="">
                        <option value="" disabled hidden>Status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    {errors.status && <span className="error">Please select a status</span>}
                </div>
                <div className="form-group">
                    <select className="field br-1" {...register("gender", { required: true })} defaultValue="">
                        <option value="" disabled hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    {errors.gender && <span className="error">Please select a gender</span>}
                </div>
                <input type="submit" value="Create" className="btn br-1" />
            </form>
        </>
    );
}