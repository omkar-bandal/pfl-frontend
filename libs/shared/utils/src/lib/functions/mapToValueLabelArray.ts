export function mapToValueLabelArray<T>(arr: T[], valuekey: keyof T, labelkey: keyof T): { value: string, label: string }[] {
    return arr.map((item) => ({
        value: String(item[valuekey]),
        label: String(item[labelkey]),
    }))
}