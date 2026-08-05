import type { Specialization } from "../../../types/types";

interface Props {
    specializations: Specialization[];
    value: string | null;
    onChange: (id: string) => void;
}

function SpecializationSelect({
    specializations,
    value,
    onChange,
}: Props) {

    return (
        <div>

            <label htmlFor="specialization">
                Выберите специализацию
            </label>

            <select
                id="specialization"
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value)}
            >

                <option value="">
                    Выберите...
                </option>

                {specializations.map((specialization) => (

                    <option
                        key={specialization.id}
                        value={specialization.id}
                    >
                        {specialization.title}
                    </option>

                ))}

            </select>

        </div>
    );
}

export default SpecializationSelect;