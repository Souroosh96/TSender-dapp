/**
 * ------------------------------------------------------------
 * Project: TSender DApp
 * File: InputField.tsx
 * Description: Input field component for the TSender DApp
 *
 * Author: Souroosh Memarian
 * Date: 2025-12-17
 *
 * License: MIT
 * ------------------------------------------------------------
 * Copyright (c) 2025 Souroosh Memarian
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * ------------------------------------------------------------
 */

import React from "react";

interface InputFieldProps {
    label: string;
    placeholder?: string;
    value: string;
    type?: string;
    large?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

export default function InputField({
    label,
    placeholder,
    value,
    type = "text",
    large = false,
    onChange,
    className,
}: InputFieldProps) {
    return (
        <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">{label}</label>

            {large ? (
                <textarea
                    className={`border border-gray-300 rounded p-2 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ""}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    className={`border border-gray-300 rounded p-2 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ${className || ""}`}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    onChange={onChange}
                />
            )}
        </div>
    );
}
