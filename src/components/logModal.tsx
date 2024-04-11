import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

export interface LogModalProps {
  open: boolean;
  handleClose: () => void;
  status: boolean;
}

export default function LogModal() {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* background */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2 flex flex-col gap-2 ">
                      <p className="text-sm text-black-600 font-semibold">
                        日期: 3-29-2024
                      </p>
                      <div>
                        <p className="text-sm text-red-500 font-semibold">
                          1. 记录今天的天气状况？
                        </p>
                        <div
                          id="answer-one-line-one"
                          className="flex flex-row justify-between"
                        >
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">晴天</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">多风</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">多云</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">湿润</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                        </div>
                        <div
                          id="answer-one-line-two"
                          className="flex flex-row justify-between"
                        >
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">炎热</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">寒冷</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">温和</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <div className="flex ">
                            <RiCheckboxBlankCircleLine className="" />
                            <p className="text-sm">干燥</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-red-500 font-semibold">
                        2. 记录今天摄入的饮食风险？
                      </p>
                      <div>
                        <div className="flex gap-10 ">
                          <div className="flex">
                            <RiCheckboxBlankCircleLine className="w-5 h-5" />
                            <p className="text-sm">辛辣</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <input
                            className="border-b-2"
                            placeholder="Type here..."
                          />
                        </div>
                        <div className="flex gap-10 ">
                          <div className="flex">
                            <RiCheckboxBlankCircleLine className="w-5 h-5" />
                            <p className="text-sm">酒精</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <input
                            className="border-b-2"
                            placeholder="Type here..."
                          />
                        </div>
                        <div className="flex gap-10 ">
                          <div className="flex">
                            <RiCheckboxBlankCircleLine className="w-5 h-5" />
                            <p className="text-sm">热饮</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <input
                            className="border-b-2"
                            placeholder="Type here..."
                          />
                        </div>
                        <div className="flex gap-10 ">
                          <div className="flex">
                            <RiCheckboxBlankCircleLine className="w-5 h-5" />
                            <p className="text-sm">其他</p>
                            {/* <RiCheckboxCircleFill /> */}
                          </div>
                          <input
                            className="border-b-2"
                            placeholder="Type here..."
                          />
                        </div>
                      </div>
                      <p className="text-sm text-red-500 font-semibold">
                        3. 检查今日的生活状态与活动，以及活动下的皮肤状态？
                      </p>
                      <p className="text-sm text-red-500 font-semibold">
                        4. 列出今日的外抹用以及护肤产品？
                      </p>
                      <p className="text-sm text-red-500 font-semibold">
                        5. 今日是否按照医生的指示定量系统性用💊？
                      </p>
                      <p className="text-sm text-red-500 font-semibold">
                        6. 今天的皮肤状态以及玫瑰痤疮情况？
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Log
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
