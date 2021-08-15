import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "../../layouts/Layout";

function Index({ loggedin }) {
    const date = new Date();
    const [values, setValues] = useState({
        make_year: date.getFullYear(),
        make_month: date.getMonth() + 1,
        make_day: date.getDate(),
        name_kana: "",
        name: "",
        year_birth: 1993,
        month_birth: 1,
        day_birth: 1,
        year_old: 27,
        address_kana: "",
        address: "",
        phone_number: "",
        email: "",
        appeal_point: "",
        move_time: "",
        move_minutes: "",
        dependent: "",
        spouse: "0",
        support_obligation: "0",
        hope: "",
        history_year_1: "",
        history_year_2: "",
        history_year_3: "",
        history_year_4: "",
        history_year_5: "",
        history_year_6: "",
        history_year_7: "",
        history_year_8: "",
        history_year_9: "",
        history_year_10: "",
        history_year_11: "",
        history_year_12: "",
        history_year_13: "",
        history_year_14: "",
        history_month_1: "",
        history_month_2: "",
        history_month_3: "",
        history_month_4: "",
        history_month_5: "",
        history_month_6: "",
        history_month_7: "",
        history_month_8: "",
        history_month_9: "",
        history_month_10: "",
        history_month_11: "",
        history_month_12: "",
        history_month_13: "",
        history_month_14: "",
        history_1: "",
        history_2: "",
        history_3: "",
        history_4: "",
        history_5: "",
        history_6: "",
        history_7: "",
        history_8: "",
        history_9: "",
        history_10: "",
        history_11: "",
        history_12: "",
        history_13: "",
        history_14: "",
        qualification_year_1: "",
        qualification_year_2: "",
        qualification_year_3: "",
        qualification_year_4: "",
        qualification_year_5: "",
        qualification_year_6: "",
        qualification_year_7: "",
        qualification_month_1: "",
        qualification_month_2: "",
        qualification_month_3: "",
        qualification_month_4: "",
        qualification_month_5: "",
        qualification_month_6: "",
        qualification_month_7: "",
        qualification_1: "",
        qualification_2: "",
        qualification_3: "",
        qualification_4: "",
        qualification_5: "",
        qualification_6: "",
        qualification_7: "",
    });

    const [query, setQuery] = useState("");

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function setRadio(e) {
        const key = e.target.name;
        const value = e.target.value;
        values[key] = value;
        let data = Object.assign({}, values); //オブジェクトを新しく作り直す必要がある
        setValues(data);
    }

    let q = "";
    // クエリ作成
    function makeQuery() {
        Object.entries(values).map(
            ([key, val]) => (q += key + "=" + val + "&")
        );
        setQuery(q);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.get("/resume/pdfPreview?" + query);
    }

    const histories = [];
    for (let i = 1; i < 15; i++) {
        histories.push(
            <tr key={i}>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`history_year_${i}`}
                        value={values["history_year" + i]}
                        type="number"
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`history_month_${i}`}
                        value={values["history_month" + i]}
                        type="number"
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`history_${i}`}
                        value={values["history_" + i]}
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
            </tr>
        );
    }

    const qualifications = [];
    for (let i = 1; i < 8; i++) {
        qualifications.push(
            <tr key={i}>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`qualification_year_${i}`}
                        value={values["qualification_year" + i]}
                        type="number"
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`qualification_month_${i}`}
                        value={values["qualification_month" + i]}
                        type="number"
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
                <td className="h-10 border-bottom-solid border-right-solid">
                    <input
                        id={`qualification_${i}`}
                        value={values["qualification" + i]}
                        onChange={handleChange}
                        className="w-3/4 bg-gray-100"
                    />
                </td>
            </tr>
        );
    }

    return (
        <div>
            <Layout loggedin={loggedin}>
                <div className="header">
                    <h1 className="header-text">履歴書作成</h1>
                </div>

                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <h2 className="float-left">履歴書</h2>
                            <p className="text-right">
                                <input
                                    id="make_year"
                                    type="number"
                                    value={values.make_year}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                年　
                                <input
                                    id="make_month"
                                    type="number"
                                    value={values.make_month}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                月　
                                <input
                                    id="make_day"
                                    type="number"
                                    value={values.make_day}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                日
                            </p>
                        </div>

                        {/* main */}
                        <table className="w-full border-collapse border-solid border-2 border-black">
                            <tbody>
                                <tr>
                                    <td className="text-form-half border-bottom-dashed">
                                        ふりがな
                                        <input
                                            id="name_kana"
                                            value={values.name_kana}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form border-bottom-bold">
                                        氏名
                                        <input
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form-half border-bottom-bold">
                                        <input
                                            id="year_birth"
                                            type="number"
                                            value={values.year_birth}
                                            onChange={handleChange}
                                            className="bg-gray-100 text-right"
                                        />
                                        年　
                                        <input
                                            id="month_birth"
                                            type="number"
                                            value={values.month_birth}
                                            onChange={handleChange}
                                            className="bg-gray-100 text-right"
                                        />
                                        月　
                                        <input
                                            id="day_birth"
                                            type="number"
                                            value={values.day_birth}
                                            onChange={handleChange}
                                            className="bg-gray-100 text-right"
                                        />
                                        日生　(満　
                                        <input
                                            id="year_old"
                                            type="number"
                                            value={values.year_old}
                                            onChange={handleChange}
                                            className="bg-gray-100 text-right"
                                        />
                                        歳)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form-half border-bottom-dashed">
                                        ふりがな
                                        <input
                                            id="address_kana"
                                            value={values.address_kana}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form border-bottom-bold align-top">
                                        <span className="align-top">
                                            現住所 〒
                                        </span>
                                        <br />
                                        <input
                                            id="address"
                                            value={values.address}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form-half border-bottom-bold">
                                        電話
                                        <input
                                            id="phone_number"
                                            value={values.phone_number}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-form-half border-bottom-bold">
                                        メールアドレス
                                        <input
                                            id="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* history */}
                        <table className="my-6 border-collapse w-full border-solid border-2 border-black">
                            <thead>
                                <tr>
                                    <th className="w-24 border-bottom-bold border-right-solid">
                                        年
                                    </th>
                                    <th className="w-14 border-bottom-bold border-right-solid">
                                        月
                                    </th>
                                    <th className="border-bottom-bold border-right-solid">
                                        学歴・職歴
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{histories}</tbody>
                        </table>
                        <div>
                            <h2 className="float-left">履歴書</h2>
                            <p className="text-right">
                                <input
                                    id="make_year"
                                    type="number"
                                    value={values.make_year}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                年　
                                <input
                                    id="make_month"
                                    type="number"
                                    value={values.make_month}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                月　
                                <input
                                    id="make_day"
                                    type="number"
                                    value={values.make_day}
                                    onChange={handleChange}
                                    className="w-14 bg-gray-100 text-right"
                                />
                                日
                            </p>
                        </div>

                        {/* qualifications */}
                        <table className="my-5 margin-top border-collapse w-full border-solid border-2 border-black">
                            <thead>
                                <tr>
                                    <th className="w-24 border-bottom-bold border-right-solid">
                                        年
                                    </th>
                                    <th className="w-14 border-bottom-bold border-right-solid">
                                        月
                                    </th>
                                    <th className="border-bottom-bold border-right-solid">
                                        免許・資格
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{qualifications}</tbody>
                        </table>

                        {/* other */}
                        <table className="w-full border-collapse border-solid border-2 border-black">
                            <tbody>
                                <tr>
                                    <td className="w-2/3 text-form border-bottom-bold align-top">
                                        <span className="align-top">
                                            志望動機・アピールポイントなど
                                        </span>
                                        <br />
                                        <textarea
                                            id="appeal_point"
                                            value={values.appeal_point}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                            rows="8"
                                            placeholder="改行できません"
                                        ></textarea>
                                    </td>
                                    <td>
                                        <div className="text-form border-bottom-bold border-left-solid">
                                            <span className="align-top">
                                                通勤時間
                                            </span>
                                            <br />
                                            <div className="text-right">
                                                約　
                                                <input
                                                    id="move_time"
                                                    type="number"
                                                    value={values.move_time}
                                                    onChange={handleChange}
                                                    className="w-14 bg-gray-100 text-right"
                                                />
                                                時間　
                                                <input
                                                    id="move_minutes"
                                                    type="number"
                                                    value={values.move_minutes}
                                                    onChange={handleChange}
                                                    className="w-14 bg-gray-100 text-right"
                                                />
                                                分
                                            </div>
                                        </div>
                                        <div className="text-form border-bottom-bold border-left-solid">
                                            <span className="align-top">
                                                扶養家族(配偶者を除く)
                                            </span>
                                            <br />
                                            <div className="text-right">
                                                <input
                                                    id="dependent"
                                                    type="number"
                                                    value={values.dependent}
                                                    onChange={handleChange}
                                                    className="w-14 bg-gray-100 text-right"
                                                />
                                                人
                                            </div>
                                        </div>
                                        <div className="text-form border-bottom-bold border-left-solid">
                                            <span className="align-top">
                                                配偶者
                                            </span>
                                            <br />
                                            <div className="text-right">
                                                <input
                                                    type="radio"
                                                    id="spouse_1"
                                                    name="spouse"
                                                    value="1"
                                                    onClick={setRadio}
                                                    checked={
                                                        values.spouse == "1"
                                                    }
                                                    readOnly
                                                />
                                                <label htmlFor="spouse_1">
                                                    有
                                                </label>
                                                ・
                                                <input
                                                    type="radio"
                                                    id="spouse_1"
                                                    name="spouse"
                                                    value="1"
                                                    onClick={setRadio}
                                                    checked={
                                                        values.spouse != "1"
                                                    }
                                                    readOnly
                                                />
                                                <label htmlFor="spouse_1">
                                                    無
                                                </label>
                                            </div>
                                        </div>
                                        <div className="text-form border-left-solid">
                                            <span className="align-top">
                                                配偶者の扶養義務
                                            </span>
                                            <br />
                                            <div className="text-right">
                                                <input
                                                    type="radio"
                                                    id="support_obligation_1"
                                                    name="support_obligation"
                                                    value="1"
                                                    onClick={setRadio}
                                                    checked={
                                                        values.support_obligation ==
                                                        "1"
                                                    }
                                                    readOnly
                                                />
                                                <label htmlFor="support_obligation_1">
                                                    有
                                                </label>
                                                ・
                                                <input
                                                    type="radio"
                                                    id="support_obligation"
                                                    name="support_obligation"
                                                    value="0"
                                                    onClick={setRadio}
                                                    checked={
                                                        values.support_obligation !=
                                                        "1"
                                                    }
                                                    readOnly
                                                />
                                                <label htmlFor="support_obligation">
                                                    無
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="my-8 border-collapse w-full border-solid border-2 border-black">
                            <tbody>
                                <tr>
                                    <th className="border-bottom-bold">
                                        本人希望記入欄(給料・勤務地など)
                                    </th>
                                </tr>
                                <tr>
                                    <th className="h-24">
                                        <textarea
                                            id="hope"
                                            value={values.hope}
                                            onChange={handleChange}
                                            className="w-3/4 ml-3 bg-gray-100"
                                            rows="8"
                                            placeholder="改行できません"
                                        ></textarea>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        {/* <form onSubmit={handleSubmit}> */}
                        <button onClick={() => makeQuery()}>
                            <a
                                href={"resume/pdfPreview?" + query}
                                target="_blank"
                            >
                                PDFプレビュー
                            </a>
                        </button>
                        <button onClick={() => makeQuery()}>
                            <a
                                href={"resume/pdfDownload?" + query}
                                target="_blank"
                            >
                                PDFダウンロード
                            </a>
                        </button>
                        <button onClick={() => makeQuery()}>
                            <a
                                href={"resume/webPreview?" + query}
                                target="_blank"
                            >
                                Webページプレビュー
                            </a>
                        </button>
                        {/* </form> */}
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Index;
