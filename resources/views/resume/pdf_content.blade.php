<div>
    <h2 class="float-left">履歴書</h2>
    <p class="text-right">{{ $data->make_year }}年　{{ $data->make_month }}月　{{ $data->make_day }}日</p>
</div>
<table class="w-full border-collapse border-solid border-2 border-black">
    <tr>
        <td class="text-form-half border-bottom-dashed">ふりがな{{ $data->name_kana }}</td>
    </tr>
    <tr>
        <td class="text-form border-bottom-bold">氏名{{ $data->name }}</td>
    </tr>
    <tr>
        <td class="text-form-half border-bottom-bold">
            {{ $data->year_birth }}年{{ $data->month_birth }}月{{ $data->day_birth }}日生　(満{{ $data->year_old }}歳)
        </td>
    </tr>
    <tr>
        <td class="text-form-half border-bottom-dashed">ふりがな{{ $data->address_kana }}</td>
    </tr>
    <tr>
        <td class="text-form border-bottom-bold align-top">
            <span class="align-top">現住所 〒</span><br>
            {{ $data->address }}
        </td>
    </tr>
    <tr>
        <td class="text-form-half border-bottom-bold">電話 {{ $data->phone_number }}
        </td>
    </tr>
    <tr>
        <td class="text-form-half border-bottom-bold">メールアドレス {{ $data->email }}</td>
    </tr>
</table>

<table class="my-6 border-collapse w-full border-solid border-2 border-black">
    <tr>
        <th class="w-24 border-bottom-bold border-right-solid">年</th>
        <th class="w-14 border-bottom-bold border-right-solid">月</th>
        <th class="border-bottom-bold border-right-solid">学歴・職歴</th>
    </tr>
    @for ($i = 1; $i < 15; $i++)
        <tr>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["history_year_{$i}"] }}</td>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["history_month_{$i}"] }}</td>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["history_{$i}"] }}</td>
        </tr>
    @endfor
</table>

<div>
    <h2 class="float-left">履歴書</h2>
    <p class="text-right">{{ $data->make_year }}年　{{ $data->make_month }}月　{{ $data->make_day }}日</p>
</div>
<table class="my-5 margin-top border-collapse w-full border-solid border-2 border-black">
    <tr>
        <th class="w-24 border-bottom-bold border-right-solid">年</th>
        <th class="w-14 border-bottom-bold border-right-solid">月</th>
        <th class="border-bottom-bold border-right-solid">免許・資格</th>
    </tr>
    @for ($i = 1; $i < 8; $i++)
        <tr>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["qualification_year_{$i}"] }}</td>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["qualification_month_{$i}"] }}</td>
            <td class="h-10 border-bottom-solid border-right-solid">{{ $data["qualification_{$i}"] }}</td>
        </tr>
    @endfor
</table>

<table class="w-full border-collapse border-solid border-2 border-black">
    <tr>
        <td class="w-2/3 text-form border-bottom-bold align-top">
            <span class="align-top">
                志望動機・アピールポイントなど
            </span>
            <br />
            {!! nl2br(e($data->appeal_point)) !!}
        </td>
        <td>
            <div class="text-form border-bottom-bold border-left-solid">
                <span class="align-top">
                    通勤時間
                </span>
                <br />
                <div class="text-right">約　{{ $data->move_time }}時間　{{ $data->move_minutes }}分</div>
            </div>
            <div class="text-form border-bottom-bold border-left-solid">
                <span class="align-top">
                    扶養家族(配偶者を除く)
                </span>
                <br />
                <div class="text-right">人</div>
            </div>
            <div class="text-form border-bottom-bold border-left-solid">
                <span class="align-top">
                    配偶者
                </span>
                <br />
                <div>
                    <span class="inline-block {{ $data->spouse == '1' ? 'circle' : '' }} ">有</span>
                    <span class="inline-block {{ $data->spouse != '1' ? 'circle' : '' }}">無</span>
                </div>
            </div>
            <div class="text-form border-left-solid">
                <span class="align-top">
                    配偶者の扶養義務
                </span>
                <br />
                <div>
                    <span class="inline-block {{ $data->support_obligation == '1' ? 'circle' : '' }}">有</span>
                    <span class="inline-block {{ $data->support_obligation != '1' ? 'circle' : '' }}">無</span>
                </div>
            </div>
        </td>
    </tr>
</table>

<table class="my-8 border-collapse w-full border-solid border-2 border-black">
    <tr>
        <td class="h-24 align-top">
            <span class="align-top">
                本人希望記入欄(給料・勤務地など)
            </span>
            <br />
            {!! nl2br(e($data->hope)) !!}
        </td>
    </tr>
</table>
