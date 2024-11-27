const NavigationList = ({ label, items }) => (
    <ul className="space-y-4">
        <h4 className="text-gray-800 font-medium">{label}</h4>
        {items.map((el, idx) => (
            <li key={idx}>
                <a
                    href={el.href}
                    className="hover:underline hover:text-indigo-600"
                >
                    {el.name}
                </a>
            </li>
        ))}
    </ul>
);

export default NavigationList;
